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

export function trimMobile(mobile) {
  let m = mobile.replace(/-/g, '').replace(/\(/g, '').replace(/\)/g, '').replace(/ /g, '');
  if (m[0] === '8') {
    m = '+7' + m.slice(1);
  }
  return m
}

export function formatCardId(cardid) {
  if (cardid.length !== 5) {
    return cardid;
  }

  cardid = "8888888" + cardid;

  let even_sum = 0;
  let odd_sum = 0;
  for (let i = 0; i < cardid.length; i++) {
    if (i % 2 == 0) even_sum += cardid[i] - '0';
    else odd_sum += cardid[i] - '0';
  }

  let sum = odd_sum * 3 + even_sum;
  let s = sum % 10;
  let control = 0;
  if (s !== 0) control = 10 - s;

  return cardid + control;
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
    //resolve(JSON.parse('{"Name": "Artur", "SurName": "Usmanov", "Mobile": "", "Birthday": "14.04.2001", "CardId": "8888888123456", "SaleMinutes": [], "Presents": [], "IsDisabled": true, "Sale": 0, "SaleComment": "", "Money": 0, "TotalMinutes": 0 }'));
    fetch("https://rscradik.ru:5001/api/getRecord", requestOptions)
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
