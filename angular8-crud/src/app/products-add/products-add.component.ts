import { Router } from "@angular/router";
import { ApiService } from "../api.service";
import {
  FormControl,
  FormGroupDirective,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-products-add",
  templateUrl: "./products-add.component.html",
  styleUrls: ["./products-add.component.scss"],
})
export class ProductsAddComponent implements OnInit {
  productForm: FormGroup;
  prod_name = "";
  prod_desc = "";
  prod_price: number = null;
  isLoadingResults = false;

  constructor(
    private router: Router,
    private api: ApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}
}
