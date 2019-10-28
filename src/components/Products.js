import React, { Component } from 'react';
import EditProduct from './EditProduct.js';
import CreateProduct from './CreateProduct.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import ServerAPI from '../ServerAPI.js';
import { async } from 'q';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elementEdit: '',
            elementCreate: '',
            data: []
        };
        this.onHandleEdit = this.onHandleEdit.bind(this);
        this.renderProduct = this.renderProduct.bind(this);
        this.renderProductEdit = this.renderProductEdit.bind(this);
        this.renderProducts = this.renderProducts.bind(this);
        this.onHandleCreate = this.onHandleCreate.bind(this);
    };

    async componentDidMount() {
        await this.getProduct();
    }

    getProduct = async () => {
        var data = await ServerAPI.getProduct();
        this.setState({
            data: data ? data.product : []
        })
    }

    onCancel = async () => {
        await this.getProduct();
        this.setState({
            elementEdit: '',
            elementCreate: ''
        });
    };

    onHandleEdit(product) {
        let element = <EditProduct
            key={product.id}
            product={product}
            onCancel={this.onCancel}
        >
        </EditProduct>
        this.setState({
            elementEdit: element
        });
    };

    onHandleDelete = async (product) => {
        await ServerAPI.deleteProduct(product.productID);
        await this.getProduct()
    };

    onHandleCreate() {
        let product = {
            id: this.state.id,
        };
        let element = <CreateProduct
            key={product.id}
            onCancel={this.onCancel}
        >
        </CreateProduct>
        this.setState({
            elementCreate: element
        });
    };


    renderProducts() {
        var result = (
            <div className='row mt-15'>
                <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                    <table className='table table-bordered table-hover'>
                        <thead>
                            <tr className='text2'>
                                <th className='text-center'>Tên sản phẩm</th>
                                <th className='text-center'>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((product, index) => {
                                return this.renderProduct(product)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )

        return result;
    }

    renderProduct(product) {
        if (this.state.elementEdit) {
            return '';
        }

        return (
            <tr className='text2'>
                <td className='text-center'>{product.name}</td>
                <td className='text-center'>{product.price} VNĐ</td>
                <td>
                    <button type='button' className='btn btn-primary button' onClick={() => this.onHandleEdit(product)}>Chỉnh sửa</button>
                    <button type='button' className='btn btn-danger button' onClick={() => this.onHandleDelete(product)}>Xóa</button>
                </td>
            </tr>
        );
    };

    renderProductEdit() {
        if (this.state.elementEdit) {
            return this.state.elementEdit;
        }
    };

    renderProductCreate() {
        if (this.state.elementCreate) {
            return this.state.elementCreate;
        }
    };

    render() {
        return (
            <div>
                <button type='button' className='btn btn-success button' onClick={this.onHandleCreate}>Thêm sản phẩm</button>
                {this.renderProducts()}
                {this.renderProductEdit()}
                {this.renderProductCreate()}
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteTask: (id) => {
            dispatch(actions.deleteTask(id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
