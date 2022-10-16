import { registerAs } from "@nestjs/config";

export default registerAs('hosts', () => ({
    iam: {
        host: process.env.IAM_MICROSERVICE_HOST,
        port: process.env.IAM_MICROSERVICE_PORT
    }
}));