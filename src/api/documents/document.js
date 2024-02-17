import { Get, Put, Post } from '../baseApi';


async function getAllDocs() {
    return Get('/Documents');
}

async function createDocument(data) {
    return Post('/Document', data);
}

async function updateDocument(id, data) {
    return Put('/Document/update/' + id, data);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAllDocs,
    createDocument,
    updateDocument,
}