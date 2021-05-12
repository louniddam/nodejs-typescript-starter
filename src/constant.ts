require('dotenv').config()

export const API_BASE_URL = process.env.API_BASE_URL || '/api/v1/';
export const HOST = process.env.HOST
export const PORT = parseInt(process.env.PORT as string) || 3306
export const PWD = process.env.PWD