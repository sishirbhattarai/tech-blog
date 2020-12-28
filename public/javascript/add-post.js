async function newFormHandler(event) {
  console.log("before")
    event.preventDefault();
  console.log("after")
  
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('input[name="content"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      // document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  };
  
document.querySelector('#new-post-form')
 .addEventListener('submit', newFormHandler);

   
console.log(document.querySelector('#new-post-form'));
// .addEventListener('submit', newFormHandler);
