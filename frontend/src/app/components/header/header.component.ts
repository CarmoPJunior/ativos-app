import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'Load script GFG';

  constructor() {
    this.loadScripts();
  }

  ngOnInit(): void {
  }

  // Metódo usado para carregar script de forma dinâmica
   loadScripts() {

    // This array contains all the files/CDNs
    const dynamicScripts = [
      'assets/menuToggle.js'
    ];
    dynamicScripts.forEach((script) => {
        const node = document.createElement('script');
        node.src = script;
        node.type = 'text/javascript';
        node.async = false;
        document.getElementsByTagName('head')[0].appendChild(node);
    })

  }

}
