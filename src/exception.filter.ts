import {ExceptionFilter, Catch, ArgumentsHost, HttpException} from '@nestjs/common';
import {Request, Response} from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest<Request>();
        const response = ctx.getResponse<Response>();
        const status = exception.getStatus();

        let message;
        if (status == 400) {
            message = 'Bad Request, You may send inappropriate types!';
        } else if (status == 403) {
            message = "Forbidden!, you don't have access to this resource/page";
        } else if (status == 404) {
            message = "Not Found!, there isn't any product with this id";
        } else if (status == 500) {
            message = 'Internal Server Error, The server has encountered a situation it does not know how to handle.';
        } else {
            message = 'an error occurred!'
        }

        response.status(status).json({
            statusCode: status,
            timestamp: new Date(),
            msg: message,
            path: request.url
        })
    }
}

