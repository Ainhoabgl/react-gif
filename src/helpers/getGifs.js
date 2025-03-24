// Este archivo se encarga de hacer la petición a la API de Giphy.

export const getGifs = async(categorias)=> {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ug2dbu0GH87Rw00g0y8wLQmd3mfcPb1v&q=${categorias}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;

}