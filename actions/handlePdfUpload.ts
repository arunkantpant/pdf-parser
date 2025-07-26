export default async function handlePdfUpload(
  prevState: any,
  formData: FormData
) {
  const userId = formData.get("user_id") as string;
  const title = formData.get("title") as string;
  const file = formData.get("file") as File;
  const formDataWithFile = new FormData();
  formDataWithFile.append("user_id", userId);
  formDataWithFile.append("title", title);
  formDataWithFile.append("file", file);
  try {
    const response = await fetch("http://localhost:5050/upload", {
      method: "POST",
      body: formDataWithFile,
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.error || "Failed to upload PDF");
    }
    return {
      success: true,
      message: "PDF uploaded successfully",
      data: result,
    };
  } catch (error) {
    console.error("Error uploading PDF:", error);
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
}
