class ObjectsPanel {

    constructor() {
      this.objects = []
  
      this.panelContent = document.querySelector('#main-row')
  
      this.loadObjects()
    }
  
    loadObjects() {
      fetch('data/objects.json')
        .then(res => res.json())
        .then(objects => {
          this.objects = objects
          this.render()
        })
    }
  
    render() {
      this.objects.forEach(object => this.genRowContent(object))
    }
  
    genRowContent(object) {
      const checkboxStatus = object.status
      const col = `<div object-data="${object.name}" class="col">
          <p class="item">
              <label class="switch">
                  <input type="checkbox" value=true checkboxStatus ? checked : null>
                  <span class="slider round"></span>
              </label>
              <b class="objeto">${object.name}</b>
              <button type="submit" class="save-button"><i class="far fa-save"></i></button>
              <button type="submit" class="edit-button"><i class="fas fa-cog"></i></button>
          </p>
      </div>`
  
      this.panelContent.insertAdjacentHTML('afterbegin', col)
    }
  
  }
  
  const objects = new ObjectsPanel();
  