export class checkbox {
  parent;
  id;
  state;
  on_events = [];
  off_events = [];

  isFunc(e) {
    return typeof e === "function";
  }
  registerOnEvent(e) {
    if (!this.isFunc(e)) {
      console.warn("cant register event for toggling");
      return;
    }
    this.on_events.push(e);
  }
  registerOffEvent(e) {
    if (!this.isFunc(e)) {
      console.warn("cant register event for toggling");
      return;
    }
    this.off_events.push(e);
  }
  toggle(e) {
    if (e.target.id == this.id) {
      this.state = e.target.checked;

      if (this.state) {
        if (this.on_events.length != 0) {
          this.on_events.forEach((onE) => onE());
        }
      } else {
        if (this.off_events.length != 0) {
          this.off_events.forEach((offE) => offE());
        }
      }
    }
  }
  constructor(id, _p) {
    this.id = id;
    this.state = false;
    this.parent = _p;
    _p?.addEventListener("change", this.toggle.bind(this), false);
  }
}
