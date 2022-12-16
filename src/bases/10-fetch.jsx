const apiKey = "Pi5CdkR5jUsRS7db5sr4JVHY14vgUZXM";

const peticion = fetch(
  `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=Messi+bobo&limit=25&offset=0&rating=g&lang=en`
);

peticion.then(resp => resp.json())
    .then(({data}) => {
       
        const {url} = data[0].images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img); 

    })
        .catch(console.warn)
