from typing import Union
from datetime import timedelta
from fastapi import FastAPI, Depends, HTTPException, status
from pydantic import BaseModel
from utils.jwt_utils import create_access_token, create_refresh_token, verify_token
from config.settings import settings

app = FastAPI()

# Dummy in-memory store for tokens
fake_token_store = {}

# Models
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: str

class RefreshToken(BaseModel):
    refresh_token: str

@app.post("/token", response_model=Token)
def login(data: dict):
    # Validate user here (dummy check for demonstration)
    user_data = {"username": data["username"]}
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    refresh_token_expires = timedelta(days=settings.REFRESH_TOKEN_EXPIRE_DAYS)
    
    access_token = create_access_token(data=user_data, expires_delta=access_token_expires)
    refresh_token = create_refresh_token(data=user_data, expires_delta=refresh_token_expires)
    
    fake_token_store[data["username"]] = {"access_token": access_token, "refresh_token": refresh_token}
    
    return {"access_token": access_token, "token_type": "bearer"}

@app.post("/refresh", response_model=Token)
def refresh_token(data: RefreshToken):
    token_data = verify_token(data.refresh_token)
    if not token_data:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid refresh token")

    user_data = {"username": token_data["username"]}
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(data=user_data, expires_delta=access_token_expires)

    # Store new access token
    fake_token_store[user_data["username"]]["access_token"] = access_token

    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/protected")
def protected_route(token: str = Depends(verify_token)):
    if not token:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid or expired token")
    return {"message": "You have access to this protected route"}
