import React, {Component} from 'react';

const base = process.env.REACT_APP_FRONTEND_SERVER_URL;
const baseUrl = process.env.REACT_APP_FRONTEND_URL;
const fileUrl = process.env.REACT_APP_FILE_URL;

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Categories: [],
            textArray: [],
            allCategories: [],
            VendorImages: [],
        }
    }

    componentDidMount() {
        this.getAllCategories();
        this.getVendorImages();
    }

    getAllCategories() {
        fetch(base + '/api/all_category_list', {
            method: 'GET'
        })
            .then(res => {
                console.log(res);
                return res.json()
            })
            .then(categories => {
                this.setState({
                    Categories: categories.data
                })
                return false;
            });
    }

    getVendorImages() {
        fetch(base + '/api/getVendorImages', {
            method: 'GET'
        })
            .then(res => {
                return res.json()
            })
            .then(response => {
                this.setState({
                    VendorImages: response.data
                })
                return false;
            });
    }


    categoryList() {
        let listArray = [];
        this.state.Categories.map((item, key) => {
            listArray.push(<li className="spvmm-havechild">
                <a className="megamenu_a" href={"/productList/" + item.id}
                   title="Women">{item.category.category_name}</a><span className="vf-button icon-close"></span>
                {this.childCategories}
                <div className="spvmm_container_menu_child">
                    <div className="spvmm_menu_child" style={{width: "902px", zIndex: 1000}}>
                        <div className="spvmm_numbers_col col4">

                            {
                                item.subcategories.forEach(item2 => {
                                    return (<ul className="spvmm_submm_ul">
                                            <li className="spvmm_submm_li  spvmm-havechildchild">
                                                <a className="megamenu_a"
                                                   href="http://demo.magentech.com/extensions/prestashop/4-tops"
                                                   title="Tops">Tops</a>
                                                <ul className="spvmm_submm_ul">
                                                    <li className="spvmm_submm_li "><a className="megamenu_a" href="#"
                                                                                       title="T-shirts">T-shirts</a>
                                                    </li>
                                                </ul>
                                                <ul className="spvmm_submm_ul">
                                                    <li className="spvmm_submm_li "><a className="megamenu_a" href="#"
                                                                                       title="Perfume">Perfume</a></li>
                                                </ul>
                                                <ul className="spvmm_submm_ul">
                                                    <li className="spvmm_submm_li "><a className="megamenu_a" href="#"
                                                                                       title="Bags">Bags</a></li>
                                                </ul>
                                                <ul className="spvmm_submm_ul">
                                                    <li className="spvmm_submm_li "><a className="megamenu_a" href="#"
                                                                                       title="Nunc con">Nunc con</a>
                                                    </li>
                                                </ul>
                                                <ul className="spvmm_submm_ul">
                                                    <li className="spvmm_submm_li "><a className="megamenu_a" href="#"
                                                                                       title="Nunc con">Nunc con</a>
                                                    </li>
                                                </ul>
                                                <ul className="spvmm_submm_ul">
                                                    <li className="spvmm_submm_li "><a className="megamenu_a" href="#"
                                                                                       title="Nunc con">Nunc con</a>
                                                    </li>
                                                </ul>
                                                <ul className="spvmm_submm_ul">
                                                    <li className="spvmm_submm_li "><a className="megamenu_a" href="#"
                                                                                       title="Nunc con">Nunc con</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    )
                                })
                            }

                            <ul className="spvmm_submm_ul">
                                <div className="sub-cate-row scp-cate-brand">
                                    <ul className="sub-brand-list">
                                        <li className="sup-brand-item"><a href="#"><img src="/image/3-0_thumb.jpg"/>
                                        </a></li>
                                        <li className="sup-brand-item"><a href="#"><img src="/image/3-0_thumb.jpg"/>
                                        </a></li>
                                        <li className="sup-brand-item"><a href="#"><img src="/image/3-0_thumb.jpg"/>
                                        </a></li>
                                        <li className="sup-brand-item"><a href="#"><img src="/image/3-0_thumb.jpg"/>
                                        </a></li>
                                        <li className="sup-brand-item"><a href="#"><img src="/image/3-0_thumb.jpg"/>
                                        </a></li>
                                        <li className="sup-brand-item"><a href="#"><img src="/image/3-0_thumb.jpg"/>
                                        </a></li>
                                        <li className="sup-brand-item"><a href="#"><img src="/image/3-0_thumb.jpg"/>
                                        </a></li>
                                        <li className="sup-brand-item"><a href="#"><img src="/image/3-0_thumb.jpg"/>
                                        </a></li>
                                        <li className="sup-brand-item"><a href="#"><img src="/image/3-0_thumb.jpg"/>
                                        </a></li>
                                        <li className="sup-brand-item"><a href="#"><img src="/image/3-0_thumb.jpg"/>
                                        </a></li>
                                    </ul>
                                </div>
                            </ul>

                        </div>
                    </div>
                </div>
            </li>)
        })
        return listArray;
    }

    render() {
        return (
            <React.Fragment>
                <div className="medium-3 large-3 columns">
                    <div id="sp_vertical_megamenu" className="sp-vertical-megamenu clearfix">
                        <h2 className="cat-title"><i className="fa fa-list-ul" aria-hidden="true"></i> Categories</h2>
                        <ul className="vf-megamenu clearfix megamenu-content">
                            {
                                // this.categoryList()
                                this.state.Categories.length > 0 ?
                                    this.state.Categories.map((item, key) => {
                                        return (<React.Fragment>
                                            <li className="spvmm-havechild" key={key}>
                                                <a className="megamenu_a" href={"/productList/" + item.category.id}
                                                   title="Women">{item.category.category_name}</a><span
                                                className="vf-button icon-close"></span>
                                                {this.childCategories}
                                                <div className="spvmm_container_menu_child" style={{zIndex: 9999}}>
                                                    <div className="spvmm_menu_child"
                                                         style={{width: "902px", zIndex: 9999}}>
                                                        <div className="spvmm_numbers_col col4">

                                                            {
                                                                item.subcategories.length > 0 ?
                                                                    item.subcategories.map((item2, key2) => {
                                                                        return (<React.Fragment>
                                                                                <ul key className="spvmm_submm_ul">
                                                                                    <li className="spvmm_submm_li  spvmm-havechildchild">
                                                                                        <a className="megamenu_a"
                                                                                           href={"/productList/" + item2.category.id}
                                                                                           title="Tops">{item2.category.category_name}</a>
                                                                                        {
                                                                                            item2.lastChilds.length > 0 ?
                                                                                                item2.lastChilds.map((item3, key3) => {
                                                                                                    return (
                                                                                                        <React.Fragment>
                                                                                                            <ul className="spvmm_submm_ul"
                                                                                                                style={{zIndex: 1000}}>
                                                                                                                <li className="spvmm_submm_li">
                                                                                                                    <a className="megamenu_a"
                                                                                                                       href={"/productList/" + item3.id}
                                                                                                                       title="T-shirts">{item3.category_name}</a>
                                                                                                                </li>
                                                                                                            </ul>
                                                                                                        </React.Fragment>
                                                                                                    )
                                                                                                })
                                                                                                :
                                                                                                <p style={{color: "#ec1c24"}}>No
                                                                                                    More Categories</p>
                                                                                        }
                                                                                    </li>
                                                                                </ul>
                                                                            </React.Fragment>
                                                                        )
                                                                    })
                                                                    :
                                                                    <p style={{color: "#ec1c24"}}>No More Categories</p>
                                                            }

                                                            {
                                                                item.subcategories.length > 0 ?
                                                                    <ul className="spvmm_submm_ul">
                                                                        <div className="sub-cate-row scp-cate-brand">
                                                                            <ul className="sub-brand-list">
                                                                                {
                                                                                    this.state.VendorImages.map((item, key) => {
                                                                                        return (
                                                                                            <React.Fragment>
                                                                                                <li className="sup-brand-item">
                                                                                                    <a href={"/vendor/" + item.vendor_id}>
                                                                                                        <img
                                                                                                            src={fileUrl + '/upload/vendor/' + item.logo}/>
                                                                                                    </a>
                                                                                                </li>
                                                                                            </React.Fragment>
                                                                                        )
                                                                                    })
                                                                                }

                                                                            </ul>
                                                                        </div>
                                                                    </ul>
                                                                    :
                                                                    <p style={{color: "#ec1c24"}}>No More Categories</p>
                                                            }

                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </React.Fragment>)
                                    })
                                    : <p style={{color: "#ec1c24"}}>No More Categories</p>
                            }


                            <li style={{textAlign: "center"}} className="spvmm-nochild">
                                <a href="/moreCategory" style={{color: "#ec1c24", textAlign: "center"}}
                                   className="megamenu_a">More Category</a>

                            </li>
                        </ul>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Categories;
        