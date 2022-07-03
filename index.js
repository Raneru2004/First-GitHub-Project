function onChange(event){
    const ans=event.target.value;
    console.log(ans)
    document.write(renderMovies(ans));
}