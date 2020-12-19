export class ItemMenu {

  label: string;
  url: string;
  admin: boolean;

  constructor(label: string = '', url: string = '', admin: boolean = false) {

    this.label = label;
    this.url = url;
    this.admin = admin;
  }

}
