
async function Checkin(participent_id: string): Promise<number | undefined> {
  try {
    if (participent_id.length > 0) {
      let headersList = {
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify({
        participent_id: participent_id,
      });

      let response = await fetch(
        "https://eventli.vercel.app/api/markAttandence",
        {
          method: "POST",
          body: bodyContent,
          headers: headersList,
        }
      );

      if (response.status === 406) return 406;
      if (response.ok) return 200;
    } else {
      throw new Error("Participent ID must be grater than 0 ");
    }
  } catch (error) {
    throw new Error("Something went wrong");
  }
}

export default Checkin;
