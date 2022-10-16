import { registerAs } from "@nestjs/config";

export default registerAs('hosts', () => ({
    iam: {
        host: process.env.IAM_HOST,
        port: process.env.PORT
    }
}));