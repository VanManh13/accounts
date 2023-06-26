function isValidAccounts(acc) {
    var pattern = /^[_a-z0-9]{6,}$/
    return pattern.test(acc)
  }
  
  // kiem tra 
  var validAccounts = [
    "123abc_",
    "_abc123",
    "______",
    "123456",
    "abcdefg",
    ".@",
    "12345",
    "1234_",
    "abcde",

  ]
  
  validAccounts.forEach(function(acc) {
    if (isValidAccounts(acc)) {
      console.log(acc + " hợp lệ.")
    } else {
      console.log(acc + " không hợp lệ.")
    }
  })
  