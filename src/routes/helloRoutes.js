export const helloRoute = {
    path: '/hello',
    method: 'get',
    handler: (req, res) => {
        res.status(200).json({ mesage: 'Hello from express!'});
    }
}