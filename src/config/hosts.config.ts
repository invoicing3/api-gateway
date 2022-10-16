import { registerAs } from "@nestjs/config";

export default registerAs('hosts', () => ({
    iam: {
        host: process.env.IAM_MICROSERVICE_HOST,
        port: process.env.IAM_MICROSERVICE_PORT
    },
    catalog: {
        host: process.env.CATALOG_MICROSERVICE_HOST
    }
}));