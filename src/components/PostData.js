import { useEffect } from "react";

function PostData() {
    function FetchData(){
        fetch("https://reqres.in/api/users", {
        method: "POST",
        body: JSON.stringify({"email":"prashant@indore.in","first_name":"Prashant","last_name":"Handel","avatar":"https://reqres.in/img.jpg"}),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
    }
    useEffect(FetchData,[]);
  return (
    <>
    </>
  );
}
export default PostData;
