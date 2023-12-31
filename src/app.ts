import "express-async-errors"
import express, {Application, json} from 'express' 
import { handleErrors } from './middlewares/handleErrors.middleware'

export const app: Application = express()

app.use(json())
app.use(handleErrors)