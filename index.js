async function onChange(event){
    const ans=event.target.value;
    console.log(ans)
    localStorage.setItem("pass",ans);
    //document.write(renderMovies(ans));
    //console.log(renderMovies(ans));
}
//onclick="window.location.href='http://127.0.0.1:5500/findyourmovie.html';"  use this on search button if needed