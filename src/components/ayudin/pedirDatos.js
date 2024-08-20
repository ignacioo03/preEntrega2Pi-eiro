import data from "../../../public/productos.json";

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 500)
    })
}

export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {
    const item = data.find((item) => item.id === id)

    if (item) {
        resolve(item)
    } else {
        reject(`No se encontro el item con id ${id}`)
    }
    })
}
