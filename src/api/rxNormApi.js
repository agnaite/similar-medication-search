
function __getMeds(arr) {
  var url_start = 'https://rxnav.nlm.nih.gov/REST/rxcui/';
  var url_end = '/related.json?tty=IN';
  var meds = [];

  for(var i=0; i<arr.length; i++) {
    console.log(arr[i])
    meds.push({ key: arr[i].rxcui,
                name: arr[i].name,
                url: url_start + arr[i].rxcui + url_end
    });
  }
  return meds;
}

function __getRelated(arr) {
  console.log("HERE")
  var meds = [];
  console.log(arr);
  for(var i=0; i<arr.length; i++) {
    console.log("this is backend")
    console.log(arr[i]);
  }
  return meds;
}

var rxNormApi = {
  getMedicine: (name) => {

    let meds = fetch('https://rxnav.nlm.nih.gov/REST/drugs.json?name='+name)
      .then((resp) => {
        return resp.json();
      }).then((data) => {
        return __getMeds(data.drugGroup.conceptGroup[1].conceptProperties);
      }).catch((err) => {
	      console.log('error!');
      });
    return meds;
  },
  getRelated: (url) => {
    console.log("URL:", url)
    let meds = axios.get(url).then(response => __getRelated(response.data));
    return meds;
  }
}

export default rxNormApi;
