import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import ServerAPI from '../ServerAPI';

class EditProduct extends Component {
    constructor(props) {
        super(props);
        this.onHandleCancel = this.onHandleCancel.bind(this);
        this.onBlurEvent = this.onBlurEvent.bind(this);
        this.onChangeEvent = this.onChangeEvent.bind(this);
    };

    onHandleCancel() {
        this.props.onCancel();
    };

    onHandleSave = async() => {
        // this.props.onEditTask(this.props.product);
        console.log(this.props)
        await ServerAPI.updateProduct(this.props.product.name, this.props.product.price, this.props.product.productID)
        this.props.onCancel();
    };

    onBlurEvent(event) {
        this.props.product[event.target.name] = event.target.value;
    }

    onChangeEvent(event) {
        this.props.product[event.target.name] = JSON.parse(event.target.value);;
    }
    
	render () {                                            
		return (
                <form className='addForm'>
                    <div className='form-group'>
                        <label>Tên sản phẩm: </label>
                        <input 
                            type='text' 
                            className='form-control' 
                            name='name' 
                            defaultValue={this.props.product.name}
                            onBlur={this.onBlurEvent}
                        >
                        </input>
                    </div>
                    <div className='form-group'>
                        <label>Giá: </label>
                        <input 
                            type='text' 
                            className='form-control' 
                            name='price' 
                            defaultValue={this.props.product.price}
                            onBlur={this.onBlurEvent}
                        >
                        </input>
                    </div>
                    {/* <label>Trạng thái: </label>
                    <select 
                        name='isActive' 
                        className='form-control'
                        defaultValue={this.props.product.isActive}
                        onChange={this.onChangeEvent}
                    >
                        <option value={false}>Hết hàng</option>
                        <option value={true}>Còn hàng</option>
                    </select> */}

                    <div>
                        <button type='button' className='btn btn-info button' onClick={this.onHandleSave}>Lưu</button>
                        <button type='button' className='btn btn-danger button' onClick={this.onHandleCancel}>Bỏ qua</button>
                    </div>
                </form>
		);
	};
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onEditTask: (task) => {
            dispatch(actions.editTask(task));
        }
    }
};

export default connect(null, mapDispatchToProps) (EditProduct);