import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import connectDB from './config/db/db.js'

import ProductRouter from './routers/ProductRouter.js'
import UserRouter from './routers/UserRouter.js'
import OrderRouter from './routers/OrderRouter.js'

import {createServer} from 'http'

import cloudinary from './config/cloudinary/cloudinary.js'
import CategoryRouter from './routers/CategoryRouter.js'
import DashboardRouter from './routers/DashboardRouter.js'

dotenv.config();

const app = express()
const PORT = process.env.PORT || 4000
const server = createServer(app)

connectDB()

app.use(cors())
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/category', CategoryRouter)
app.use('/products', ProductRouter)
app.use('/user', UserRouter)
app.use('/order', OrderRouter)
app.use('/dashboard', DashboardRouter)

app.post('/api/upload', async (req, res) => {
    try {
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'dev_setups',
        });
        res.json({ msg: 'yaya' });
    } catch (err) {
        res.status(500).json({ err: 'Lỗi ' + err });
    }
});

server.listen(PORT, () => console.log(`server running on port ${PORT}`))