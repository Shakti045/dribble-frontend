
export const uploadImage = async (image) => {
    if (!image) return;
    
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'rfahuwwl');

    try {
      const response = await fetch(
        'https://api.cloudinary.com/v1_1/djq1vmvy4/image/upload',
        {
          method: 'POST',
          body: formData,
        }
      );
      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error('Error uploading image: ', error);
      throw new Error('Error uploading image');
    }
  };