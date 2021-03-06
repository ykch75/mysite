import firebase from 'firebase'
export const getBlogs = async () => {
  const querySnapshot = await db.collection("blogs").get()
  const data = []
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, title: doc.data().title })
  })
  return data
}

export const createBlog = (blog) => db.collection("blogs").add({ title: blog })
export const deleteBlog = (blogId) => db.collection('blogs').doc(blogId).delete()

import './blog.css';

class BlogList {
  constructor() {
    this.list = document.querySelector('#blog-list ul');
    this.form = document.forms['add-blog'];
    this.addInput = document.querySelector('#add-input');
    this.hideBox = document.querySelector('#hide');
    this.searchBar = document.forms['search-blogs'].querySelector('input');
    this.bindEvents();
    this.render();
  }

  bindEvents() {
    this.list.addEventListener('click', this.onDeleteButtonClick.bind(this));
    this.form.addEventListener('submit', this.onSubmit.bind(this));
    this.hideBox.addEventListener('change', this.onHideBoxChange.bind(this));
    this.searchBar.addEventListener('keyup', this.onSearchBarChange.bind(this));
  }

  async onDeleteButtonClick(e) {
    if (e.target.className == 'delete') {
      const blogId = e.target.dataset.id;
      // console.log(e.target.dataset)
      await deleteBlog(blogId);
      this.render();
    }
  }

  //e=>paramator any
  async onSubmit(e) {
    e.preventDefault();
    const { value } = this.addInput;
    await createBlog(value);
    this.addInput.value = '';
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
    blogs.forEach((blog) => lis += `<li><span class="name">${blog.title}</span><span class="delete" data-id=${blog.id}>delete</span></li>`);
    this.list.innerHTML = lis;
  }
}
//class BlogList finish
// 全部classやんか何これ

const blogList = new BlogList();
*/

// var h2 = blog.querySelector('#blog-list h2');

// h2.addEventListener('click',(e) => {
//   console.log(e.target)
// })

// const deleteButtons = blog.querySelectionAll('#blog-list .delete')
// deleteButtons.forEach((button)=>{
//   button.addEventListener('click',(e) => {
//     const li = e.target.parentElement;
//     li.parentElement.removeChild(li)
//   })
// })