async function useGetData(url) {
  const res = await fetch(process.env.NEXT_PUBLIC_MAIN_URL + url);

  if (!res.status) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default useGetData;
