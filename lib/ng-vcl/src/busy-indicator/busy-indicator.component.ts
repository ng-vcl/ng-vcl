import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Component, Input, OnChanges, SimpleChanges, Directive, ContentChildren, QueryList } from '@angular/core';

// tslint:disable-next-line:max-line-length
const CIRCULAR = 'data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iCiAgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIgogICAgIHZpZXdCb3g9IjAgMCAxMDAgMTAwIgogICAgIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIgoJd2lkdGg9IjEwMCUiCiAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KCTxnPgoJICAgIDxkZWZzPgoJICAgIAk8Y2xpcFBhdGggaWQ9ImNsaXAiPgoJICAgICAgCQk8cGF0aCAgZD0iTSA1MCA1MCBMIDM1IDAgTCA2NSAwIHoiIC8+CgkJICAgIDwvY2xpcFBhdGg+CgkgICAgCTxlbGxpcHNlIGlkPSJDaXJjbGVCbG9jayIgY2xpcC1wYXRoPSJ1cmwoI2NsaXApIiBjeD0iNTAiIGN5PSI1MCIgcng9IjQwIiByeT0iNDAiIHN0eWxlPSJmaWxsOm5vbmU7IHN0cm9rZTojRThFOEU4IiBzdHJva2Utd2lkdGg9IjE1Ii8+CgkgICAgPC9kZWZzPgoKCQk8dXNlIHhsaW5rOmhyZWY9IiNDaXJjbGVCbG9jayIgLz4KCQk8dXNlIHhsaW5rOmhyZWY9IiNDaXJjbGVCbG9jayIgdHJhbnNmb3JtPSJyb3RhdGUoNDAgNTAgNTApIiAvPgoJCTx1c2UgeGxpbms6aHJlZj0iI0NpcmNsZUJsb2NrIiB0cmFuc2Zvcm09InJvdGF0ZSg4MCA1MCA1MCkiIC8+CgkJPHVzZSB4bGluazpocmVmPSIjQ2lyY2xlQmxvY2siIHRyYW5zZm9ybT0icm90YXRlKDEyMCA1MCA1MCkiLz4KCQk8dXNlIHhsaW5rOmhyZWY9IiNDaXJjbGVCbG9jayIgdHJhbnNmb3JtPSJyb3RhdGUoMTYwIDUwIDUwKSIvPgoJCTx1c2UgeGxpbms6aHJlZj0iI0NpcmNsZUJsb2NrIiB0cmFuc2Zvcm09InJvdGF0ZSgyMDAgNTAgNTApIi8+CgkJPHVzZSB4bGluazpocmVmPSIjQ2lyY2xlQmxvY2siIHRyYW5zZm9ybT0icm90YXRlKDI0MCA1MCA1MCkiLz4KCQk8dXNlIHhsaW5rOmhyZWY9IiNDaXJjbGVCbG9jayIgdHJhbnNmb3JtPSJyb3RhdGUoMjgwIDUwIDUwKSIvPgoJCTx1c2UgeGxpbms6aHJlZj0iI0NpcmNsZUJsb2NrIiB0cmFuc2Zvcm09InJvdGF0ZSgzMjAgNTAgNTApIi8+CgoJCTxlbGxpcHNlIGNsaXAtcGF0aD0idXJsKCNjbGlwKSIgY3g9IjUwIiBjeT0iNTAiIHJ4PSI0MCIgcnk9IjQwIiBzdHlsZT0iZmlsbDpub25lOyBzdHJva2U6IzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxNSI+CgkJCTxhbmltYXRlVHJhbnNmb3JtCgkJCQlhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iCgkJCQlhdHRyaWJ1dGVUeXBlPSJYTUwiCgkJCQl0eXBlPSJyb3RhdGUiCgkJCQl2YWx1ZXM9IjAgNTAgNTA7IDQwIDUwIDUwOyA4MCA1MCA1MDsgMTIwIDUwIDUwOyAxNjAgNTAgNTA7IDIwMCA1MCA1MDsgMjQwIDUwIDUwOyAyODAgNTAgNTA7IDMyMCA1MCA1MCIKCQkJCWR1cj0iM3MiCgkJCQlyZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIKCQkJCWFkZGl0aXZlPSJyZXBsYWNlIgoJCQkJY2FsY01vZGU9ImRpc2NyZXRlIgoJCQkJZmlsbD0iZnJlZXplIi8+CgkJPC9lbGxpcHNlPgoJPC9nPgo8L3N2Zz4=';

@Component({
  selector: 'vcl-busy-indicator',
  templateUrl: 'busy-indicator.component.html'
})
export class BusyIndicatorComponent {

  constructor(private sanitizer: DomSanitizer ) { }

  @Input()
  layout: 'vertical' | 'horizontal' = 'vertical';

  @Input()
  label = 'Loading';

  @Input()
  icon?: string;

  @Input()
  imageHeight = '3em';

  @Input()
  imageWidth = '3em';

  imageSrc = this.sanitizer.bypassSecurityTrustResourceUrl(CIRCULAR);
}
