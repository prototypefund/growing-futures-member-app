export async function submitPoll(productList, household, user) {
  let url = process.env.VUE_APP_BACKEND_URL+ "/save-poll" 
  let body = {'uid': user.uid + '-' + productList.uid,
              'user': user,
              'pollName': productList.uid,
              'household': household,
              'poll': productList}
  await postJson(url, body) 
}

export async function checkSubmissionStatus(user) {
  console.log(user)
  return false
}

export async function getHouseholdInfo(pollId, user) {
  let url = process.env.VUE_APP_BACKEND_URL+ "/get-household-info" 
  let body = {'userId': user.uid,
              'pollId': pollId}
  return await postJson(url, body) 
}

export async function getProductList(pollId, user) {
  let url = process.env.VUE_APP_BACKEND_URL+ "/get-poll-questions" 
  let body = {'userId': user.uid,
              'pollId': pollId}
  return await postJson(url, body) 
}

export async function getNextShare(user){
  if (user) {
    console.log("Loading shares for " + user.uid)
    let url = process.env.VUE_APP_BACKEND_URL+ "/get-next-delivery" 
    let body = {'uid': user.uid}
    return await postJson(url, body) 
  }
  return {}
}

export async function getRecentShares(user){
  if (user) {
    console.log("Loading shares for " + user.uid)
    let url = process.env.VUE_APP_BACKEND_URL+ "/get-recent-deliveries" 
    let body = {'uid': user.uid}
    return await postJson(url, body) 
  }
  return {}
}

export async function postJson(url, body){
try {
  let response = await fetch(url, {
    method: 'post',
    credentials: 'omit',
    headers: {
              'Content-Type': 'application/json'
            },
    body: JSON.stringify(body),
    mode: 'cors'})

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    } 

    return await response.json()
  } catch (error) { 
    // handle error
  }
} 
