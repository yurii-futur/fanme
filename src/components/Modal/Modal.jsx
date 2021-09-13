import React from 'react';
import close from '../../assets/img/close.svg'
import avatar from '../../assets/img/small_avatar.svg'
import './Modal.css'

const Modal = ({ description, getDataForPost, visible, createNewPost, setVisible }) => {

    const rootClass = ['modal']

    if (visible) {
        rootClass.push('visibled')
    }

    console.log([...rootClass].join(' '))

    return (
        <div className={[...rootClass].join(' ')}>
            <div className="modal__container border border-gray-200 rounded bg-white max-w-md w-full pb-4">
                <div className="modal__top pl-3 py-5 border-b border-gray-100">
                    <img className="cursor-pointer" src={close} onClick={() => {setVisible(false)}} alt="" />
                </div>
                <div className="modal__input px-6 pt-6 pb-4 flex justify-between items-start">
                    <img className="mr-4" src={avatar} alt=""/>
                    <textarea className="border-b h-24 border-gray-200 resize-none w-full" placeholder="Write a caption " value={description} onChange={(e) => getDataForPost(e.target.value)}></textarea>
                </div>
                <button onClick={() => createNewPost()} className="modal__publish ml-auto mr-6 block text-white bg-blue-400 py-2 px-20 rounded">Publish</button>
            </div>

        </div>
    );
};

export default Modal;