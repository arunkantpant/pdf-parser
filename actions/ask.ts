"use server";

export default async function askQuestion(prevState: any, formData: FormData) {
  const question = formData.get("question") as string;
  const document_id = formData.get("document_id") as string;

  try {
    const response = await fetch("http://localhost:5050/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question,
        document_id,
      }),
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(
        result.error || result.message || "Failed to ask question"
      );
    }
    console.log("Response from ask API:", result);
    return {
      success: true,
      message: "Question asked successfully",
      data: result,
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
}
