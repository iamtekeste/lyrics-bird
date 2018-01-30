/*
* Lyrics Bird
*/

class LyricsBird {
  init() {
    console.log(this.getMusicID());
  }
  getMusicID() {
    return window.location.search.split("&")[0].split("=")[1];
  }
  getMusicData() {}
}

window.onload = () => {
  const myLyricsBird = new LyricsBird();
  myLyricsBird.init();
};
