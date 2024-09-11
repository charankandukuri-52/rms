import os
from dotenv import load_dotenv, set_key
from pydantic_settings import BaseSettings
import secrets
from typing import Union
from datetime import timedelta

# Load environment variables from a .env file
load_dotenv()

def generate_secret_key() -> str:
    """Generate a secure random JWT secret key."""
    return secrets.token_urlsafe(32)  # 32 bytes = 256 bits

class Settings(BaseSettings):
    # General Settings
    APP_NAME: str = "Ping Food"
    DEBUG: bool = False
    VERSION: str = "1.0.0"

    # Security Settings
    SECRET_KEY: str = os.getenv("SECRET_KEY", None)
    if SECRET_KEY is None:
        SECRET_KEY = generate_secret_key()
        set_key('.env', 'SECRET_KEY', SECRET_KEY)
    
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 15
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7

    # Other settings...

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"

# Create a settings instance
settings = Settings()
