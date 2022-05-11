exports.success = (res, bodyRes, status) => {
    res.status(status || 200).send({
        error:'',
        body: bodyRes.data,
        message: bodyRes.message
    })
}
exports.error = (res, bodyRes, status, details) => {
    console.error('[response error]', details)
    res.status(status || 500).send({
        error: bodyRes.error,
        body: bodyRes.data,
        message: bodyRes.message})
}