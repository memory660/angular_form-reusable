import { Component, Input, OnInit } from "@angular/core";
import { ControlContainer, FormGroup } from "@angular/forms";

@Component({
  selector: "app-hobbies",
  templateUrl: "./hobbies.component.html",
  styleUrls: ["./hobbies.component.scss"],
})
export class HobbiesComponent implements OnInit {
  public hobbiesForm: FormGroup;
  @Input() parentForm: FormGroup;

  // L'utilisation du ControlContainer permet de transmettre un formulaire parent à ses sous-formulaires qui sont mis en œuvre en tant que composants.
  constructor(private controlContainer: ControlContainer) {}

  public ngOnInit(): void {
    this.hobbiesForm = this.controlContainer.control as FormGroup;
  }

  public logForms(): void {
    console.log("Hobbies form", this.hobbiesForm);
    console.log("Parent (Hero) form", this.parentForm);
  }
}
