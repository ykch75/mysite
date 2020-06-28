import { getBlogs, createBlog, deleteBlog, editBlog } from '../services/Firestore';
import './index.css';

class BlogList {
    constructor() {
        this.list = document.querySelector('#blog-list ul');
        this.form = document.forms['add-blog'];
        this.addName = document.querySelector('#add-name');
        this.addBody = document.querySelector('#add-body');
        this.hideBox = document.querySelector('#hide');
        this.searchBar = document.forms['search-blogs'].querySelector('input');
        this.bindEvents();
        this.render();
    }

    bindEvents() {
        this.list.addEventListener('click', this.onNameClick.bind(this));
        this.list.addEventListener('click', this.onDeleteButtonClick.bind(this));
        this.list.addEventListener('click', this.onEditButtonClick.bind(this));
        this.list.addEventListener('click', this.onSave.bind(this));
        this.list.addEventListener('click', this.onCancel.bind(this));
        this.form.addEventListener('submit', this.onSubmit.bind(this));
        this.hideBox.addEventListener('change', this.onHideBoxChange.bind(this));
        this.searchBar.addEventListener('keyup', this.onSearchBarChange.bind(this));
    }
    
    async onNameClick(e) {;
      if (e.target.className == 'name') {
        if (e.target.parentNode.children[1].style.display == 'none') {
          e.target.parentNode.children[1].style.display = 'block';
          e.target.parentNode.children[2].style.display = 'block';
          e.target.parentNode.children[3].style.display = 'block';
        } else {
          e.target.parentNode.children[1].style.display = 'none';
          e.target.parentNode.children[2].style.display = 'none';
          e.target.parentNode.children[3].style.display = 'none';
        }
      }
    }
  

    async onDeleteButtonClick(e) {
      if (e.target.className == 'btn delete') {
      const blogId = e.target.dataset.id;
      await deleteBlog(blogId);
      this.render();
      }
    }

    onEditButtonClick(e) {
      if (e.target.className == 'btn edit') {
      e.target.parentNode.children[1].style.display = 'none';
      e.target.parentNode.children[2].style.display = 'none';
      e.target.parentNode.children[4].children[0].style.display = 'block';
      }
    }

    
    async onSave(e) {
      e.preventDefault();      
      if (e.target.id == 'save') {
        const blogId = e.target.dataset.id;
        const name = this.editName.value;
        const body = this.editBody.value
        await editBlog(blogId, name, body);
        this.editName.value = '';
        this.editBody.value = '';
        this.render();
      }
    }

    async onCancel(e) {
      e.preventDefault();
      if (e.target.id == 'cancel') {
        e.target.parentNode.style.display = 'none';
        e.target.parentNode.parentNode.parentNode.children[3].style.display = 'none';
      }
    }
    
  async onSubmit(e) {
    e.preventDefault();
    const name = this.addName.value;
    const body = this.addBody.value;
    await createBlog(name, body);
    this.addName.value = '';
    this.addBody.value = '';
    this.render();
  }

  onHideBoxChange(e) {
    if (this.hideBox.checked) {
      this.list.style.display = 'none';
    } else {
      this.list.style.display = 'initial';
    }
  }

  onSearchBarChange(e) {
    const term = e.target.value.toLowerCase();
    const blogs = this.list.getElementsByTagName('li');
    Array.from(blogs).forEach((blog) => {
      const title = blog.firstElementChild.textContent;
      if (title.toLowerCase().indexOf(term) != -1) {
        blog.style.display = 'block';
      } else {
        blog.style.display = 'none';
      }
    });
  }

  async render() {
    const blogs = await getBlogs();
    let lis = '';
    blogs.forEach((blog) => lis += `<li><span class="name"><i class="fa fa-chevron-right fa-fw"></i>${blog.title}</span><span class="btn delete" data-id=${blog.id}>delete</span><span class="btn edit">edit</span><p class="detail">${blog.body}</p><form id="edit-blog"><div class="edit-wrapper"><input type="text" id="edit-name" placeholder="${blog.title}"><input type="text" id="edit-body" placeholder="${blog.body}"><button id="cancel">cancel</button><button id="save" data-id=${blog.id}>Save</button></div></form></li>`);
    this.list.innerHTML = lis;
    this.editName = document.querySelector("#edit-name");
    this.editBody = document.querySelector("#edit-body");
  }
}

const blogList = new BlogList();