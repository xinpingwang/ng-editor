export abstract class UploadAdaptor {
  abstract upload(file: File): Promise<string>;

  abstract abort(): void;
}

export class Base64UploadAdaptor extends UploadAdaptor {
  reader: FileReader;

  upload(file: File) {
    return new Promise<string>((resolve, reject) => {
      this.reader = new FileReader();
      this.reader.addEventListener("load", () => {
        resolve(String(this.reader.result));
      });

      this.reader.addEventListener("error", (err) => {
        reject(err);
      });

      this.reader.addEventListener("abort", () => {
        reject();
      });
      this.reader.readAsDataURL(file);
    });
  }

  abort() {
    this.reader.abort();
  }
}
