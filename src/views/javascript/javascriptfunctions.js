function showDiv() {
  document.getElementById('loading').style.display = 'flex';
}

function validateamount(amount) {
  console.log('inside validateAmount');
  var msg = document.getElementById('msg');
  var button = document.getElementById('refundbutton');
  var validamount = new RegExp(/^[+]?([1-9][0-9]*(?:[\.][0-9]*)?|0*\.0*[1-9][0-9]*)(?:[eE][+-][0-9]+)?$/);
  if (amount.value.length > 0) {
    if (validamount.test(amount.value)) {
      //msg.innerHTML = '';
      document.getElementById('msg').style.display = 'none';
      button.disabled = false;
      return true;
    } else {
      // msg.innerHTML = Constants.ERROR_MSG_REFUND_AMOUNT;
      //msg.innerHTML = 'This is an error!';
      document.getElementById('msg').style.display = 'flex';
      button.disabled = true;
      return false;
    }
  } else {
    document.getElementById('msg').style.display = 'none';
    button.disabled = false;
    return true;
  }
}

function validate() {
  var amount = document.getElementById('refundAmount').value;

  if (amount.length != 0) {
    document.getElementById('loading').style.display = 'flex';

    return true;
  } else {
    document.getElementById('loading').style.display = 'none';

    return false;
  }
}
