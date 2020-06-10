export function minutesSuffix(n) {
  if (n <= 100) return formatLess100(n);
  if (n > 100) return formatLess100(n % 100);
}

function formatLess20(n) {
  if (n == 0) return "";
  if (n == 1) return "а";
  if (2 <= n && n <= 4) return "ы";
  if (5 <= n && n <= 20) return "";
}

function formatLess100(n) {
  if (n <= 20) return formatLess20(n);
  if (21 <= n <= 100) return formatLess20(n % 10);
}


export function minutesSuffixM(n) {
  if (n <= 100) return formatLess100M(n);
  if (n > 100) return formatLess100M(n % 100);
}

function formatLess20M(n) {
  if (n == 0) return "ов";
  if (n == 1) return "";
  if (2 <= n && n <= 4) return "а";
  if (5 <= n && n <= 20) return "ов";
}

function formatLess100M(n) {
  if (n <= 20) return formatLess20M(n);
  if (21 <= n <= 100) return formatLess20M(n % 10);
}

export function load(cardid, mobile) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Accept", "application/json");
  
  var raw = JSON.stringify({"cardid":cardid, "mobile":mobile});
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  console.log(raw);

  return new Promise((resolve, reject) => {
    fetch("https://rscradik.asuscomm.com:5001/api/getRecord", requestOptions)
      .then(result => {
        if (result.ok === false)
          reject("result is not ok")

        return result.json();
      })
      .then(json => {
        console.log(json);
        resolve(json);
      })
      .catch(err => {
        reject("error")
      })
  })
}