//
//  BaseViewController.h
//  BearRNTest2
//
//  Created by apple on 2017/7/10.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#define HEIGHT [[UIScreen mainScreen] bounds].size.height
#define WIDTH [[UIScreen mainScreen] bounds].size.width

#import <UIKit/UIKit.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@interface BaseViewController : UIViewController

@property (strong, nonatomic) UIView    *contentView;

@end
