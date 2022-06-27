let id = 0;

export class Tips{
    constructor(title, description){
        this.id = id++
        this.title = this.isTitleValid(title);
        this.description = this.isDescValid(description);
    }

    isTitleValid(title){
        if(typeof title === 'string' && title.length >= 8){
            return title
        }else{
          console.log(title)
            throw new Error('your title needs to be longer and cannot have special characters ')
        }
    }
    isDescValid(description){
      if(description.length >= 10){
          return description
      }else{
          throw new Error('your description needs to be longer ')
      }
  }
}