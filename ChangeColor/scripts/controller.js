@RequestMapping(value = "/uploadFile", method = RequestMethod.POST)
private @ResponseBody
String uploadFileHandler(@RequestParam("name") String name,
        @RequestParam("file") MultipartFile file) {
    if (!file.isEmpty()) {
        try {
            byte[] bytes = file.getBytes();

            // Creating the directory to store file
            String rootPath = "path To save your file/Spring_Upload";
            File dir = new File(rootPath + File.separator + "tmpFiles");
            if (!dir.exists())
                dir.mkdirs();

            // Create the file on server
            File serverFile = new File(dir.getAbsolutePath()
                    + File.separator + name);
            BufferedOutputStream stream = new BufferedOutputStream(
                    new FileOutputStream(serverFile));
            stream.write(bytes);
            stream.close();

            logger.info("Server File Location="
                    + serverFile.getAbsolutePath());

            return "You successfully uploaded file=" + name;
        } catch (Exception e) {
            return "You failed to upload " + name + " => " + e.getMessage();
        }
    } else {
        return "You failed to upload " + name
                + " because the file was empty.";
    }
}