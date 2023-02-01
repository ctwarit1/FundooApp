import Joi from '@hapi/joi';

export const newNoteValidator = (req, res, next) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        color: Joi.string().min().optional(),
    });

    const { error, value } = schema.validate(req.body);
    if (error) {
        console.log(error)
        next(error);
    } else {
        next();
    }
}
