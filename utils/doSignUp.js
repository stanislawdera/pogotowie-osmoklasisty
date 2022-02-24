export default async function doSignUp(
  data = {},
  setLoading,
  setError,
  whenDone
) {
  setLoading(true);
  setError(false);

  const response = await fetch("/api/sign-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const contentType = response.headers.get("content-type");
  const isResponseJSON =
    contentType && contentType.indexOf("application/json") !== -1;

  const responseData = isResponseJSON ? await response.json() : false;

  if (!response.ok) {
    setLoading(false);
    setError(responseData ? responseData.error : "unknown-error");
  } else {
    // success
    setLoading(false);
    console.log(responseData);
    whenDone();
  }
}
