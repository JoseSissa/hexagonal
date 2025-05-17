import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { ExpressUserRouter } from "./lib/User/infrastructure/ExpressUserRouter";

const app = express();

app.use(ExpressUserRouter);

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error) {
        console.error(err.message);
        res.status(500).json({ message: err.message });
    } else {
        console.error(err);
        res.status(500).json({ message: err });
    }
});

app.listen(3000, () => {
    console.log(`Ser server started on port http://localhost:3000`);
});