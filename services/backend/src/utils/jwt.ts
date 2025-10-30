import jwt from 'jsonwebtoken';

// JWT_SECRET se carga desde archivo .env
const JWT_SECRET = process.env.JWT_SECRET!;

const generateToken = (userId: string) => {
  return jwt.sign(
    { id: userId }, 
    JWT_SECRET, 
    { expiresIn: '1h' }
  );
};

const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};

export default {
  generateToken,
  verifyToken
}