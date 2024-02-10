import { Get } from '../baseApi';


async function getAllDocs() {
    return Get('/Documents');
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAllDocs,
}